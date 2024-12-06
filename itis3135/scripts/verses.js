// Array of Bible verses
const bibleVerses = [
    '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you a hope and a future." - Jeremiah 29:11',
    '"The Lord is my shepherd; I shall not want." - Psalm 23:1',
    '"I can do all things through Christ who strengthens me." - Philippians 4:13',
    '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
    '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." - Romans 8:28',
    '"The Lord is near to the brokenhearted and saves the crushed in spirit." - Psalm 34:18',
    '"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5'
];

// Function to update the Bible verse every few seconds
let currentIndex = 0;

function showBibleVerse() {
    // Get the next Bible verse and display it
    const verseElement = document.getElementById("bible-verse");
    verseElement.innerHTML = bibleVerses[currentIndex];

    // Update the index to the next verse, wrapping around if needed
    currentIndex = (currentIndex + 1) % bibleVerses.length;
}

// Call the function immediately
showBibleVerse();

// Update the Bible verse every 5 seconds
setInterval(showBibleVerse, 5000); // Change verse every 5 seconds
