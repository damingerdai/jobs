package org.daming.jobs.service.impl;

import org.daming.jobs.base.shiro.UserBean;
import org.daming.jobs.repository.IUserRepository;
import org.daming.jobs.service.IShiroUserService;
import org.springframework.stereotype.Service;

/**
 * @author gming001
 * @version 2024-02-14 13:38
 */
@Service
public class ShiroUserServiceImpl implements IShiroUserService {

    private final IUserRepository userRepository;

    @Override
    public UserBean getUser(String username) {
        var userBeanOptional = this.userRepository.findByUsername(username);
        if (userBeanOptional.isPresent()) {
            var user = userBeanOptional.get();
            var userBean = new UserBean();
            userBean.setId(user.getId());
            userBean.setUsername(user.getUsername());
            userBean.setPassword(user.getPassword());
            return userBean;
        }
        return null;
    }

    public ShiroUserServiceImpl(IUserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }
}
