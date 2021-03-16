package xinbo.website.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xinbo.website.model.Song;


public interface SongsRepository extends JpaRepository<Song, Long> {
    Song findAllByArtistName(String artistName);
    Song findAllBySongGenre(String songGenre);
}
