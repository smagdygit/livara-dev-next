const news = [
    {
        title: 'Det här är en nyhet 1',
        description: 'Nyheten är såklart mycket längre än detta dock...',
        link: 'nyhet-1',
        date: '2021-05-24',
        content: [
            {
                type: 'image',
                data: 'https://i.imgur.com/zQCBmAx.png'
            },
            {
                type: 'title',
                data: 'Byggd i React & Next med ett fokus på användarvänlighet'
            },
            {
                type: 'text',
                data: 'Det har länge varit dags för ett nytt kapitel i Livaras online-befintlighet, och vi har under dem senaste månaderna jobbat hårt med att bygga upp en ny hemsida från grunden. Stort fokus har lagts på användarvänlighet och modern design, som vi har kombinerat för att ge den bästa hemsideupplevelsen vi kan. Vi kommer fortsätta att jobba med hemsidan framöver för att integrera ännu mer tekniker som kan hjälpa användaren att hitta den information den söker.'
            },
            {
                type: 'title',
                data: 'Framtida uppdateringar'
            },
            {
                type: 'text',
                data: 'Nu när vi har fått färdigt själva hemsidan fokuserar vi på att göra den ännu mer användarvänlig. Specifikt har vi kollat på textuppläsare för den som har svårare att läsa mindre texter, och även globala översättningar för dem som vill läsa informationen på ett språk annat än svenska.'
            },
            {
                type: 'link',
                data: '/',
                text: 'Klicka här för att komma till vår nya startsida!'
            },
        ]
    },
];

export default news;