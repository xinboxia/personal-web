package xinbo.website;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import xinbo.website.controller.SongController;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class WebsiteApplicationTests {

    @Autowired
    private SongController songController;

    @Test
    public void contextLoads() {
        assertThat(songController).isNotNull();
    }

}
