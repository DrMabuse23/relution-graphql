/**
    * @file ./football.gen.ts
    * Created by Relution CLI on 14.09.2016
    * Copyright (c)
    * 2016
    * All rights reserved.
    */
import * as Q from 'q';
// Relution APIs
const connector = require('relution/connector.js');

/**
* @interface InfoSoapBindingAllPlayersWithYellowCardsInput
*/
export interface InfoSoapBindingAllPlayersWithYellowCardsInput {
  AllPlayersWithYellowCards?: AllPlayersWithYellowCards;
}


/**
* @interface InfoSoapBindingCountryNamesInput
*/
export interface InfoSoapBindingCountryNamesInput {
  CountryNames?: CountryNames;
}


/**
* @interface AllPlayerNames
*/
export interface AllPlayerNames {
  bSelected?: boolean;
}


/**
* @interface InfoSoapBindingCitiesInput
*/
export interface InfoSoapBindingCitiesInput {
  Cities?: Cities;
}


/**
* @interface AllPlayersWithYellowOrRedCards
*/
export interface AllPlayersWithYellowOrRedCards {
  bSortedByName?: boolean;
  bSortedByYellowCards?: boolean;
  bSortedByRedCards?: boolean;
}


/**
* @interface AllPlayersWithRedCards
*/
export interface AllPlayersWithRedCards {
  bSortedByName?: boolean;
  bSortedByRedCards?: boolean;
}


/**
* @interface AllPlayersWithRedCardsResponse
*/
export interface AllPlayersWithRedCardsResponse {
  AllPlayersWithRedCardsResult?: ArrayOftPlayersWithCards;
}


/**
* @interface ArrayOftGameCard
*/
export interface ArrayOftGameCard {
  tGameCard?: TGameCard[];
}


/**
* @interface CountryNames
*/
export interface CountryNames {
  bWithCompetitors?: boolean;
}


/**
* @interface AllPlayerNamesResponse
*/
export interface AllPlayerNamesResponse {
  AllPlayerNamesResult?: ArrayOftPlayerNames;
}


/**
* @interface CitiesResponse
*/
export interface CitiesResponse {
  CitiesResult?: ArrayOfString;
}


/**
* @interface AllPlayersWithYellowCards
*/
export interface AllPlayersWithYellowCards {
  bSortedByName?: boolean;
  bSortedByYellowCards?: boolean;
}


/**
* @interface InfoSoapBindingAllPlayersWithRedCardsInput
*/
export interface InfoSoapBindingAllPlayersWithRedCardsInput {
  AllPlayersWithRedCards?: AllPlayersWithRedCards;
}


/**
* @interface ArrayOftGoal
*/
export interface ArrayOftGoal {
  tGoal?: TGoal[];
}


/**
* @interface TGameCard
*/
export interface TGameCard {
  dGame?: Date;
  iMinute?: number;
  sPlayerName?: string;
  bYellowCard?: boolean;
  bRedCard?: boolean;
  sTeamName?: string;
  sTeamFlag?: string;
  sTeamFlagLarge?: string;
}


/**
* @interface AllPlayersWithYellowOrRedCardsResponse
*/
export interface AllPlayersWithYellowOrRedCardsResponse {
  AllPlayersWithYellowOrRedCardsResult?: ArrayOftPlayersWithCards;
}


/**
* @interface InfoSoapBindingAllPlayersWithYellowOrRedCardsOutput
*/
export interface InfoSoapBindingAllPlayersWithYellowOrRedCardsOutput {
  AllPlayersWithYellowOrRedCardsResponse?: AllPlayersWithYellowOrRedCardsResponse;
}


/**
* @interface AllStadiumInfo
*/
export interface AllStadiumInfo {

}


/**
* @interface AllGamesResponse
*/
export interface AllGamesResponse {
  AllGamesResult?: ArrayOftGameInfo;
}


/**
* @interface TTeamInfo
*/
export interface TTeamInfo {
  iId?: number;
  sName?: string;
  sCountryFlag?: string;
  sWikipediaURL?: string;
  sCountryFlagLarge?: string;
}


/**
* @interface ArrayOftCountryInfo
*/
export interface ArrayOftCountryInfo {
  tCountryInfo?: TCountryInfo[];
}


/**
* @interface InfoSoapBindingAllPlayerNamesOutput
*/
export interface InfoSoapBindingAllPlayerNamesOutput {
  AllPlayerNamesResponse?: AllPlayerNamesResponse;
}


/**
* @interface ArrayOftStadiumInfo
*/
export interface ArrayOftStadiumInfo {
  tStadiumInfo?: TStadiumInfo[];
}


/**
* @interface TGoal
*/
export interface TGoal {
  dGame?: Date;
  iMinute?: number;
  sPlayerName?: string;
  sTeamName?: string;
  sTeamFlag?: string;
  sTeamFlagLarge?: string;
}


/**
* @interface InfoSoapBindingAllPlayerNamesInput
*/
export interface InfoSoapBindingAllPlayerNamesInput {
  AllPlayerNames?: AllPlayerNames;
}


/**
* @interface ArrayOftPlayerNames
*/
export interface ArrayOftPlayerNames {
  tPlayerNames?: TPlayerNames[];
}


/**
* @interface InfoSoapBindingAllPlayersWithRedCardsOutput
*/
export interface InfoSoapBindingAllPlayersWithRedCardsOutput {
  AllPlayersWithRedCardsResponse?: AllPlayersWithRedCardsResponse;
}


/**
* @interface InfoSoapBindingAllPlayersWithYellowOrRedCardsInput
*/
export interface InfoSoapBindingAllPlayersWithYellowOrRedCardsInput {
  AllPlayersWithYellowOrRedCards?: AllPlayersWithYellowOrRedCards;
}


/**
* @interface InfoSoapBindingAllStadiumInfoOutput
*/
export interface InfoSoapBindingAllStadiumInfoOutput {
  AllStadiumInfoResponse?: AllStadiumInfoResponse;
}


/**
* @interface InfoSoapBindingAllGamesOutput
*/
export interface InfoSoapBindingAllGamesOutput {
  AllGamesResponse?: AllGamesResponse;
}


/**
* @interface AllStadiumInfoResponse
*/
export interface AllStadiumInfoResponse {
  AllStadiumInfoResult?: ArrayOftStadiumInfo;
}


/**
* @interface AllGames
*/
export interface AllGames {

}


/**
* @interface TStadiumInfo
*/
export interface TStadiumInfo {
  sStadiumName?: string;
  iSeatsCapacity?: number;
  sCityName?: string;
  sWikipediaURL?: string;
  sGoogleMapsURL?: string;
}


/**
* @interface TGameInfo
*/
export interface TGameInfo {
  iId?: number;
  sDescription?: string;
  dPlayDate?: Date;
  tPlayTime?: Date;
  iUTCOffset?: number;
  StadiumInfo?: TStadiumInfo;
  'Team1'?: TTeamInfo;
  'Team2'?: TTeamInfo;
  sResult?: string;
  sScore?: string;
  iYellowCards?: number;
  iRedCards?: number;
  Cards?: ArrayOftGameCard;
  Goals?: ArrayOftGoal;
  bChampion?: boolean;
}


/**
* @interface TCountryInfo
*/
export interface TCountryInfo {
  iId?: number;
  sName?: string;
  sIsoCode?: string;
  iPersons?: number;
}


/**
* @interface InfoSoapBindingAllPlayersWithYellowCardsOutput
*/
export interface InfoSoapBindingAllPlayersWithYellowCardsOutput {
  AllPlayersWithYellowCardsResponse?: AllPlayersWithYellowCardsResponse;
}


/**
* @interface InfoSoapBindingAllStadiumInfoInput
*/
export interface InfoSoapBindingAllStadiumInfoInput {
  AllStadiumInfo?: AllStadiumInfo;
}


/**
* @interface TPlayerNames
*/
export interface TPlayerNames {
  iId?: number;
  sName?: string;
  sCountryName?: string;
  sCountryFlag?: string;
  sCountryFlagLarge?: string;
}


/**
* @interface ArrayOftPlayersWithCards
*/
export interface ArrayOftPlayersWithCards {
  tPlayersWithCards?: TPlayersWithCards[];
}


/**
* @interface ArrayOfString
*/
export interface ArrayOfString {
  string?: string[];
}


/**
* @interface TPlayersWithCards
*/
export interface TPlayersWithCards {
  sName?: string;
  iYellowCards?: number;
  iRedCards?: number;
  sTeamName?: string;
  sTeamFlag?: string;
  sTeamFlagLarge?: string;
}


/**
* @interface Cities
*/
export interface Cities {

}


/**
* @interface InfoSoapBindingCitiesOutput
*/
export interface InfoSoapBindingCitiesOutput {
  CitiesResponse?: CitiesResponse;
}


/**
* @interface InfoSoapBindingAllGamesInput
*/
export interface InfoSoapBindingAllGamesInput {
  AllGames?: AllGames;
}


/**
* @interface AllPlayersWithYellowCardsResponse
*/
export interface AllPlayersWithYellowCardsResponse {
  AllPlayersWithYellowCardsResult?: ArrayOftPlayersWithCards;
}


/**
* @interface ArrayOftGameInfo
*/
export interface ArrayOftGameInfo {
  tGameInfo?: TGameInfo[];
}


/**
* @interface InfoSoapBindingCountryNamesOutput
*/
export interface InfoSoapBindingCountryNamesOutput {
  CountryNamesResponse?: CountryNamesResponse;
}


/**
* @interface CountryNamesResponse
*/
export interface CountryNamesResponse {
  CountryNamesResult?: ArrayOftCountryInfo;
}

export class FootballBaseConnection {
  constructor(public name = 'football') { }

  configureSession(properties: any) {
    return connector.configureSession(this.name, properties);
  }


  /**
  * football['infoSoapBindingAllGames']
  *
  * InfoSoapBinding/AllGames
  *
  * @params input 'Object' InfoSoapBindingAllGamesInput
  * @return Promise InfoSoapBindingAllGamesOutput
  */
  public infoSoapBindingAllGames(input: InfoSoapBindingAllGamesInput): Q.Promise<InfoSoapBindingAllGamesOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllGames',
      input
    );
  }


  /**
  * football['infoSoapBindingAllPlayerNames']
  *
  * InfoSoapBinding/AllPlayerNames
  *
  * @params input 'Object' InfoSoapBindingAllPlayerNamesInput
  * @return Promise InfoSoapBindingAllPlayerNamesOutput
  */
  public infoSoapBindingAllPlayerNames(input: InfoSoapBindingAllPlayerNamesInput): Q.Promise<InfoSoapBindingAllPlayerNamesOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllPlayerNames',
      input
    );
  }


  /**
  * football['infoSoapBindingAllPlayersWithRedCards']
  *
  * InfoSoapBinding/AllPlayersWithRedCards
  *
  * @params input 'Object' InfoSoapBindingAllPlayersWithRedCardsInput
  * @return Promise InfoSoapBindingAllPlayersWithRedCardsOutput
  */
  public infoSoapBindingAllPlayersWithRedCards(input: InfoSoapBindingAllPlayersWithRedCardsInput): Q.Promise<InfoSoapBindingAllPlayersWithRedCardsOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllPlayersWithRedCards',
      input
    );
  }


  /**
  * football['infoSoapBindingAllPlayersWithYellowCards']
  *
  * InfoSoapBinding/AllPlayersWithYellowCards
  *
  * @params input 'Object' InfoSoapBindingAllPlayersWithYellowCardsInput
  * @return Promise InfoSoapBindingAllPlayersWithYellowCardsOutput
  */
  public infoSoapBindingAllPlayersWithYellowCards(input: InfoSoapBindingAllPlayersWithYellowCardsInput): Q.Promise<InfoSoapBindingAllPlayersWithYellowCardsOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllPlayersWithYellowCards',
      input
    );
  }


  /**
  * football['infoSoapBindingAllPlayersWithYellowOrRedCards']
  *
  * InfoSoapBinding/AllPlayersWithYellowOrRedCards
  *
  * @params input 'Object' InfoSoapBindingAllPlayersWithYellowOrRedCardsInput
  * @return Promise InfoSoapBindingAllPlayersWithYellowOrRedCardsOutput
  */
  public infoSoapBindingAllPlayersWithYellowOrRedCards(input: InfoSoapBindingAllPlayersWithYellowOrRedCardsInput): Q.Promise<InfoSoapBindingAllPlayersWithYellowOrRedCardsOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllPlayersWithYellowOrRedCards',
      input
    );
  }


  /**
  * football['infoSoapBindingAllStadiumInfo']
  *
  * InfoSoapBinding/AllStadiumInfo
  *
  * @params input 'Object' InfoSoapBindingAllStadiumInfoInput
  * @return Promise InfoSoapBindingAllStadiumInfoOutput
  */
  public infoSoapBindingAllStadiumInfo(input: InfoSoapBindingAllStadiumInfoInput): Q.Promise<InfoSoapBindingAllStadiumInfoOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/AllStadiumInfo',
      input
    );
  }


  /**
  * football['infoSoapBindingCities']
  *
  * InfoSoapBinding/Cities
  *
  * @params input 'Object' InfoSoapBindingCitiesInput
  * @return Promise InfoSoapBindingCitiesOutput
  */
  public infoSoapBindingCities(input: InfoSoapBindingCitiesInput): Q.Promise<InfoSoapBindingCitiesOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/Cities',
      input
    );
  }


  /**
  * football['infoSoapBindingCountryNames']
  *
  * InfoSoapBinding/CountryNames
  *
  * @params input 'Object' InfoSoapBindingCountryNamesInput
  * @return Promise InfoSoapBindingCountryNamesOutput
  */
  public infoSoapBindingCountryNames(input: InfoSoapBindingCountryNamesInput): Q.Promise<InfoSoapBindingCountryNamesOutput> {
    return connector.runCall(
      this.name,
      'InfoSoapBinding/CountryNames',
      input
    );
  }
}
