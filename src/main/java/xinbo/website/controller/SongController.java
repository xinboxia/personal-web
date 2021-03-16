package xinbo.website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xinbo.website.model.Song;
import xinbo.website.repository.SongsRepository;

@RestController
public class SongController {

    @Autowired
    SongsRepository songsRepository;

    @RequestMapping("/songs")
    public Iterable<Song> getSongs() {
        return songsRepository.findAll();
    }

}
