package org.daming.jobs.base.utils;

import jakarta.servlet.http.HttpServletRequest;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.*;

/**
 * CommonUtils
 *
 * @author daming
 * @date 2020-11-15 12:20:12:20
 */
public class CommonUtils {

    private static Random random = new Random();

    /**
     * checks empty.
     * @param  obj
     * @return Boolean
     **/
    public static Boolean isBlank(Object obj) {
        if (null == obj) {
            return true;
        }
        boolean flag = false;
        if (obj instanceof String) {
            flag = obj.toString().trim().length() <= 0;
        } else if (obj instanceof Object[]) {
            flag = ((Object[]) obj).length == 0;
        } else if (obj instanceof Collection) {
            flag = ((Collection<?>) obj).isEmpty();
        } else if (obj instanceof Map) {
            flag = ((Map<?, ?>) obj).isEmpty();
        } else if (obj instanceof Enumeration) {
            flag = !((Enumeration<?>) obj).hasMoreElements();
        } else if (obj instanceof Iterator) {
            flag = !((Iterator<?>) obj).hasNext();
        }
        return flag;
    }

    public static Boolean isNotBlank(Object obj) {
        return !isBlank(obj);
    }

    public static boolean isEmpty(String str) {
        return str == null || "".equals(str.trim());
    }

    public static boolean isNotEmpty(String str) {
        return !isEmpty(str);
    }

    public static boolean isEmpty(List<?> list) {
        return list == null || list.size() == 0;
    }

    public static boolean isNotEmpty(List<?> list) {
        return !isEmpty(list);
    }

    public static boolean isEmpty(Object[] array) {
        return array == null || array.length == 0;
    }

    public static <T> boolean isEmpty2(T[] array) {
        return array == null || array.length == 0;
    }

    public static <T> boolean isNotEmpty(T[] array) {
        return !isEmpty2(array);
    }

    public static boolean isEmpty(Set<?> set) {
        return Objects.isNull(set) || set.isEmpty();
    }

    public static boolean isNotEmpty(Set<?> set) {
        return !isEmpty(set);
    }

    public static boolean isEmpty(Map<?, ?> map) {
        return Objects.isNull(map) || map.isEmpty();
    }

    public static boolean isNotEmpty(Map<?, ?> map) {
        return !isEmpty(map);
    }

    public static String getIpAddr(HttpServletRequest request) {
        String ipAddress = request.getHeader("x-forwarded-for");
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
            if (ipAddress.equals("127.0.0.1") || ipAddress.equals("0:0:0:0:0:0:0:1")) {
                InetAddress inet = null;
                try {
                    inet = InetAddress.getLocalHost();
                    ipAddress = inet.getHostAddress();
                } catch (UnknownHostException e) {
                    e.printStackTrace();
                }
            }
        }

        if (ipAddress != null && ipAddress.length() > 15) {
            if (ipAddress.indexOf(",") > 0) {
                ipAddress = ipAddress.substring(0, ipAddress.indexOf(","));
            }
        }
        return ipAddress;
    }

    public static String randomNumbers(int length) {
        StringBuilder sBuffer = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sBuffer.append(random.nextInt(10));
        }
        return sBuffer.toString();
    }

    public static boolean isNumeric(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (!Character.isDigit(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}
