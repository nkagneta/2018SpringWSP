

export class Game {
    MyQuotes: string[] = [
        "Great minds think alike, but...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        { Name: 'Nicholas'}
    ];
    Picture: string = 'https://cdn.vox-cdn.com/thumbor/w3toxxZ9sLiDWslw9gJh3vyy56I=/0x0:3674x2800/1200x800/filters:focal(1761x932:2347x1518)/cdn.vox-cdn.com/uploads/chorus_image/image/58571535/usa_today_10588737.1517801738.jpg';
    PlayedQuotes: Quote[] = [
        
    ];

}

export class User{
    Name: string;
}

export class Quote{
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}