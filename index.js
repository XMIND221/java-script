// Fonctions de manipulation de chaînes

// 1. Inverser une chaîne
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Compter les caractères
function countCharacters(str) {
    return str.length;
}

// 3. Mettre les mots en majuscule
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Fonctions de tableau

// 4. Rechercher le maximum
function findMax(arr) {
    return Math.max(...arr);
}

// 5. Rechercher le minimum
function findMin(arr) {
    return Math.min(...arr);
}

// 6. Somme d'un tableau
function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filtrer le tableau
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Fonctions mathématiques

// 8. Factorielle
function factorial(n) {
    if (n < 0) return undefined; // Factorielle non définie pour les nombres négatifs
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 9. Vérification des nombres premiers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 10. Suite de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    const sequence = [0];
    if (n === 1) return sequence;
    sequence.push(1);
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Exemples d'utilisation (pour tester les fonctions)
console.log("=== Tests des fonctions ===");

// Tests pour les fonctions de chaînes
console.log("Inverser une chaîne:", reverseString("hello")); // "olleh"
console.log("Compter les caractères:", countCharacters("javascript")); // 10
console.log("Mettre les mots en majuscule:", capitalizeWords("bonjour le monde")); // "Bonjour Le Monde"

// Tests pour les fonctions de tableau
const numbers = [5, 2, 9, 1, 7];
console.log("Maximum:", findMax(numbers)); // 9
console.log("Minimum:", findMin(numbers)); // 1
console.log("Somme:", arraySum(numbers)); // 24
console.log("Filtrer (nombres > 5):", filterArray(numbers, num => num > 5)); // [9, 7]

// Tests pour les fonctions mathématiques
console.log("Factorielle de 5:", factorial(5)); // 120
console.log("6 est premier?", isPrime(6)); // false
console.log("7 est premier?", isPrime(7)); // true
console.log("Fibonacci (8 termes):", fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]