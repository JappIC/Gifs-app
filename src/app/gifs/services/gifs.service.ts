import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

//const GIPHY_API_KEY = 'TpGe75WSAQs2qR2AhJ5jpVA99wIhz7Nc'

@Injectable({providedIn: 'root'})
export class GifsService {

    public gifList:Gif[] = [];

    private _tagsHistory:string[] = [];
    private apiKey:string = 'TpGe75WSAQs2qR2AhJ5jpVA99wIhz7Nc';
    private serviceUrl:string = 'https://api.giphy.com/v1/gifs'

    constructor( private http:HttpClient ) {
        this.loadLocalStorage()
    }

    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory( tag:string ){
        tag = tag.toLowerCase();

        // Revisamos si el tag es igual a otro que ya se añadió y si es así se elimina
        if (this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        // Insertamos el nuevo tag
        this._tagsHistory.unshift( tag );
        //Limitamos a 10 el numero de tag en el menú
        this._tagsHistory = this._tagsHistory.slice(0,10);
        // Guardamos en el Local Storage
        this.saveLocalStorage();
    }

    private saveLocalStorage():void {
        localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
    }

    private loadLocalStorage():void {
        if( !localStorage.getItem('history') ) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

        if( this._tagsHistory.length === 0 ) return;
        this.searchTag( this._tagsHistory[0] );
    }

    searchTag( tag:string):void {
        if ( tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '6')
            .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
            .subscribe( resp =>{
                this.gifList = resp.data;
            }
        );
        //console.log(this.gifList)
    }

}
