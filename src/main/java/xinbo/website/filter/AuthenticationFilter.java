package xinbo.website.filter;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import xinbo.website.service.AuthenticationService;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


// 认证filter， 继承了 general filter
public class AuthenticationFilter extends GenericFilter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        Authentication authentication = AuthenticationService.getAuthentication((HttpServletRequest) request);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(request, response);
    }

}
