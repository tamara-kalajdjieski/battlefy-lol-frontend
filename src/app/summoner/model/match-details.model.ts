export class MatchDetails {

    outcome: string;
    gameDuration: number;
    gameType: string;
    gameMode: string;
    defencePerks: number;
    offencePerks: number;
    flexPerks: number;
    championId: string;
    championName: string;
    spells: Array<string>;
    championLevel: number;
    kills: number;
    deaths: number;
    assists: number;
    items: Array<number>;
    totalCreepScore: number;
    goldEarned: number;

    constructor(
        outcome: string,
        gameDuration: number,
        gameType: string,
        gameMode: string,
        defencePerks: number,
        offencePerks: number,
        flexPerks: number,
        championId: string,
        championName: string,
        championLevel: number,
        spells: Array<string>,
        kills: number,
        deaths: number,
        assists: number,
        items: Array<number>,
        totalCreepScore: number,
        goldEarned: number
    )
    {
        this.outcome = outcome;
        this.gameDuration = gameDuration;
        this.gameType = gameType;
        this.gameMode = gameMode;
        this.defencePerks = defencePerks;
        this.offencePerks = offencePerks;
        this.flexPerks = flexPerks;
        this.championId = championId;
        this.championName = championName;
        this.championLevel = championLevel;
        this.spells = spells;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.items = items;
        this.totalCreepScore = totalCreepScore;
        this.goldEarned = goldEarned;
    }

    getGameMinuteDuration(): number {
        return Math.floor(this.gameDuration/60)
    }
    getGameSecondsDuration(): number {
        return this.gameDuration % 60;
    }
    getCreepsPerMinute(): number {
        return this.totalCreepScore*60/this.gameDuration
    }
    getGoldPerMinute(): number {
        return this.goldEarned*60/this.gameDuration
    }
}