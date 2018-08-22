import { Injectable, HttpException } from '@nestjs/common';
import { MOVIES } from './../mocks/movies.mock';

@Injectable()
export class MoviesService {
    movies = MOVIES;

    getMovies(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.movies);
        });
    }

    getMovie(movieID): Promise<any> {
        let id = Number(movieID);
        return new Promise(resolve => {
            const movieTemp = this.movies.find(movie => movie.id === id);
            if (!movieTemp) {
                throw new HttpException('Movie does not exist!', 404);
            }
            resolve(movieTemp);
        });
    }

    addMovie(movie): Promise<any> {
        return new Promise(resolve => {
            this.movies.push(movie);
            resolve(this.movies);
        });
    }

    deleteMovie(movieID): Promise<any> {
        let id = Number(movieID);
        return new Promise(resolve => {
            let index = this.movies.findIndex(movie => movie.id === id);
            if (index === -1) {
                throw new HttpException('Movie does not exist!', 404);
            }
            this.movies.splice(index, 1);
            resolve(this.movies);
        });
    }
}
