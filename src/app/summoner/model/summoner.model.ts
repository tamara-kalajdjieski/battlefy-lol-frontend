export class Summoner{
    private _name: string;
    
    private _puuid: string;
    
    private _profileIconId: string;
    
    private _level: number;

    
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get puuid(): string {
        return this._puuid;
    }

    public set puuid(value: string) {
        this._puuid = value;
    }

    public get profileIconId(): string {
        return this._profileIconId;
    }

    public set profileIconId(value: string) {
        this._profileIconId = value;
    }

    public get level(): number {
        return this._level;
    }

    public set level(value: number) {
        if(value > 0) {
            this._level = value;
        }
    }
    
    constructor(name: string, puuid: string, profileIconId: string, level: number){
        this._name = name;
        this._puuid = puuid;
        this._profileIconId = profileIconId;
        this._level = level;
    }


}