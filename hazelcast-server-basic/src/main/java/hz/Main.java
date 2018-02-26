package hz;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

/**
 * 
 * This class launches the hazelcast cluster member in a spring-managed context.
 * This is the entry point to the hz cluster. The Java command that is used for
 * launching should fire this main method.
 *
 */
public class Main {
    
    /**
     * @param args
     */
    public static void main(String[] args) throws Exception{
        ApplicationContext ctx = new GenericXmlApplicationContext("beans.xml");
        
    }

}
