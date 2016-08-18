import { Component, OnChanges, Input,
         Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    fixedUiWidth: number = 86;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
    //only EventEmitter should be marked with the @Output() decorator

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        // fires when the parent component sets the rating input property
        this.starWidth = this.rating * this.fixedUiWidth / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        //raises the event ratingClicked to whoever subscribed to it (parent component maybe)
    }
}
