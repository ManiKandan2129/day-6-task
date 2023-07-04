class movies
{
   constructor(title,studio,rating)
   {
       this.title=title;
       this.studio=studio;
       this.rating=rating;
   }


     static getPg(movie)
        { 
          let moviePg=[];
          movie.forEach(element=> {
           if(element.rating =="PG13")
           {
               moviePg.push(element);
           }
           else if(element.rating ="PG"){
               moviePg.push(element);
           }
            });
            return moviePg;
       }
}

let Movie1 = new movies("Casino Royale","Eon Productions","PG13");  
let Movie2 = new movies("Beast","SunPictures");
let Movie3 = new movies("Doctor","AGS Entertainment");


let arr=[Movie1,Movie2,Movie3];
let PGMovies=movies.getPg(arr);
console.log(arr);

