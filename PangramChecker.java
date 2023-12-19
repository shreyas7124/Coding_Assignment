import java.util.Scanner;

public class PangramChecker {

    public static boolean isPangram(String sentence) {
        boolean[] alphabetPresent = new boolean[26];
        sentence = sentence.toLowerCase();

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';
                alphabetPresent[index] = true;
            }
        }

        for (boolean present : alphabetPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence to check if it's a pangram: ");
        String inputSentence = scanner.nextLine();

        if (isPangram(inputSentence)) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }

        scanner.close();
    }
}
