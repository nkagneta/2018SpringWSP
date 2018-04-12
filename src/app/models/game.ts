

export class Game {
    
    Players: User[] = [
        { Name: 'Nicholas Agneta', MyQuotes: [] },
        { Name: 'Arin Hanson', MyQuotes: [] },
        { Name: 'Dan Avidan', MyQuotes: [] },
    ];
    Dealer: string = "Nicholas Agneta";
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [   
        {Text: "That's fake news", PlayerName: 'Arin Hanson', Chosen: false } 
    ];

}

export class User{
    Name: string;
    MyQuotes: string[];
}

export class Quote{
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}