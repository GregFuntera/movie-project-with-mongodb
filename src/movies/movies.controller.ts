import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private movieSvc: MoviesService) {}

    @Get()
    async getMovies() {
        const movies = await this.movieSvc.getMovies();
        return movies;
    }

    @Get(':movieID')
    async getMovie(@Param('movieID') movieID) {
        const movie = await this.movieSvc.getMovie(movieID);
        return movie;
    }

    @Post()
    async addMovie(@Body() createMovieDTO: CreateMovieDTO) {
        const movie = await this.movieSvc.addMovie(createMovieDTO);
        return movie;
    }

    @Delete()
    async deleteMovie(@Query() query) {
        const movies = await this.movieSvc.deleteMovie(query.movieID);
        return movies;
    }
}
