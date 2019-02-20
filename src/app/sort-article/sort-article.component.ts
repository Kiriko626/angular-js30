import { Component, OnInit } from '@angular/core';

const bands: string[] = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here',
    'An Old Dog'
];

@Component({
    selector: 'app-sort-article',
    templateUrl: './sort-article.component.html',
    styleUrls: ['./sort-article.component.styl']
})
export class SortArticleComponent implements OnInit {

    public filteredBands: string[] = [];

    ngOnInit() {
        this.filteredBands = bands.sort((bandA, bandB) => this.strip(bandA) > this.strip(bandB) ? 1 : -1);
    }

    private strip(band) {
        return band.replace(/^(the |an |a )/i, '').trim()
    }
}