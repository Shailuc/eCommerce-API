import java.net.*;
import java.io.*;

public class Main {

	public static void main(String[] args) {
		URL url;
        URLConnection connection = null;
        String inputLine = "";

        try {
            url = new URL("https://ecom.payfirma.com/transaction/270331?merchant_id=58c6c0e92d&key=45ee79ba2b207431d542423b8b1bb1cbe815e88d");
            connection = url.openConnection();

            BufferedReader inStream = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            while ((inputLine = inStream.readLine()) != null) {
                System.out.println(inputLine);
            }
            inStream.close();
        } catch (MalformedURLException me) {
            System.err.println("MalformedURLException: " + me);
        } catch (IOException ioe) {

            System.err.println("IOException: " + ioe);

            InputStream error = ((HttpURLConnection) connection).getErrorStream();

            try {
                int data = error.read();
                while (data != -1) {
                    inputLine = inputLine + (char)data;
                    data = error.read();
                }
                error.close();
            } catch (Exception ex) {
                try {
                    if (error != null) {
                        error.close();
                    }
                } catch (Exception e) {
                    System.out.println("Unhandled error");
                }
            }
            System.out.println(inputLine);
        }
	}

}