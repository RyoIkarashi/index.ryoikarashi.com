import {AxiosStatic} from "axios";
import {Token} from "../../Domains/Token/Token";

export interface ISpotifyTokenRepository {
    // queries
    getFirstToken(): Promise<Token>;
    getTokenByAuthorizationCode(http: AxiosStatic, basicAuthorizationCode: string, authorizationCode: string): Promise<Token>;
    refreshToken(http: AxiosStatic, expiredToken: Token, encodedAuthorizationCode: string): Promise<Token>;
    // commands
    storeAccessTokenAndMaybeRefreshToken(token: Token): Promise<void>;
}