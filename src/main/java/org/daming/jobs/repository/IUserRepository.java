package org.daming.jobs.repository;

import org.daming.jobs.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author gming001
 * @version 2024-02-14 13:47
 */
@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
