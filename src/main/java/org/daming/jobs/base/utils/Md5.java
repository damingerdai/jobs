package org.daming.jobs.base.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * @author gming001
 * @version 2024-02-14 14:32
 */
public class Md5 {

    public static String encrypt(String content) throws NoSuchAlgorithmException {
        var md5 = MessageDigest.getInstance("md5");
        var digest = md5.digest(content.getBytes());
        StringBuilder md5code = new StringBuilder(new BigInteger(1, digest).toString(16));
        for (int i = 0; i < 32 - md5code.length(); i++) {
            md5code.insert(0, "0");
        }
        return md5code.toString();
    }
}
