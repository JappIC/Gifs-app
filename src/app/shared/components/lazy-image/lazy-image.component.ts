import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'share-lazy-image',
    templateUrl: 'lazy-image.component.html',
    styleUrl: 'lazy-image.component.css'
})

export class LazyImageComponent implements OnInit{

    @Input()
    public url!:string;

    @Input()
    public alt:string = 'Image default';

    @Input()
    public width!:string;

    @Input()
    public height!:string;

    public hasLoaded:boolean = false;

    ngOnInit(): void {
        if( !this.url ) throw new Error("URL property is required.");
    }

    onLoad(){
        setTimeout(()=>{
            this.hasLoaded = true;
        }, 1000 );
    }

}
