import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>){}

    async getMovies(): Promise<Movie[]> {
        const movies = await this.movieModel.find().exec();
        return movies;
    }

    async getMovie(movieID): Promise<Movie> {
        const fetchedMovie = await this.movieModel
            .findById(movieID)
            .exec();
        return fetchedMovie;
    }

    async addMovie(createMovieDTO: CreateMovieDTO): Promise<Movie> {
       const addedMovie = await this.movieModel(createMovieDTO);
       return addedMovie.save();
    }

    async updateMovie(movieID, createMovieDTO: CreateMovieDTO): Promise<Movie> {
        const updatedMovie = await this.movieModel
            .findByIdAndUpdate(movieID, createMovieDTO, {new: true});
        return updatedMovie;
    }

    async deleteMovie(movieID): Promise<Movie> {
        const deletedMovie = await this.movieModel
            .findByIdAndRemove(movieID);
        return deletedMovie;
    }
}
