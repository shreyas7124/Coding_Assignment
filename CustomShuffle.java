import java.util.Arrays;
import java.util.Random;

public class CustomShuffle {

    public static void shuffleArray(int[] array) {
        Random random = new Random();
        int n = array.length;

        for (int i = n - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randIndex = random.nextInt(i + 1);

            // Swap elements at i and randIndex
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }

    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};

        System.out.println("Original Array: " + Arrays.toString(originalArray));

        // Shuffle the array using the custom shuffle method
        shuffleArray(originalArray);

        System.out.println("Shuffled Array: " + Arrays.toString(originalArray));
    }
}
