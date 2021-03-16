package xinbo.website;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import xinbo.website.model.Song;
import xinbo.website.repository.SongsRepository;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
// 因为是mysql db，所以要加上这个注释
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)
public class SongRepositoryTest {
    @Autowired
    private TestEntityManager testEntityManager;
    @Autowired
    private SongsRepository songsRepository;

    @Test
    public void saveSong() {
        Song song = new Song("Malaa", "Made in France", "Bass House");
        testEntityManager.persistAndFlush(song);
        assertThat(song.getId()).isNotNull();
    }
}
