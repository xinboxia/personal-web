package xinbo.website.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xinbo.website.model.loginInfo;

public interface RegistrationRepository extends JpaRepository<loginInfo, Long> {
}
