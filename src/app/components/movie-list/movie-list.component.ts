import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [
    { title: "Morbius (2021)", flagWatched: "false", description:"Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", thumbnail:"https://source.unsplash.com/random/500x500/?superhero,morbius"},
    { title: "Batman (2022)", flagWatched: "false", description:"Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", thumbnail:"https://source.unsplash.com/random/500x500/?superhero,batman"},
    { title: "Superman (2023)", flagWatched: "false", description:"Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", thumbnail:"https://source.unsplash.com/random/500x500/?superhero,superman"},
    { title: "Spiderman (2024)", flagWatched: "false", description:"Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", thumbnail:"https://source.unsplash.com/random/500x500/?superhero,spiderman"},
    { title: "Hulk (2025)", flagWatched: "false", description:"Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", thumbnail:"https://source.unsplash.com/random/500x500/?superhero,hulk"},
    
  ]

  watched: Array<any> = [];
  addToWatchedList(movie: any) {
    // if (this.watched.includes(movie)) {
    //   alert("already added");
    // }
    // else {
    //   this.movies.splice(this.movies.indexOf(movie),1);
    //   this.watched.push(movie);
    // }
    this.movies.splice(this.movies.indexOf(movie),1);
    this.watched.push(movie);
  }
  removeFromWatchedList(movie: any) {
    this.movies.push(movie);
    this.watched.splice(this.watched.indexOf(movie),1);
  }




constructor() { }

ngOnInit(): void {
}

}
