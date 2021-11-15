package org.daming.jobs.base.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.JWTVerifier;

import java.util.Date;
import java.util.Map;

public class JwtTool {

    public static String createToken(String secret, long expireTime) {
       return createToken(secret, expireTime,Map.of());
    }

    public static String createToken(String secret, long expireTime, Map<String, Object> payloadClaims) {
        var date = new Date(System.currentTimeMillis() + expireTime);
        var algorithm = Algorithm.HMAC256(secret);
        return JWT.create().withPayload(payloadClaims).withExpiresAt(date).sign(algorithm);
    }

    public static boolean verifyToken(String token, String secret) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            var verifier = JWT.require(algorithm).build();
            var jwt = verifier.verify(token);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }

    }
}
