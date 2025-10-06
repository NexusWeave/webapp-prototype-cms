//  Imports and interface Logic

interface AuthClaims
{
    iss: string;
    aud: string;
    iat: number;
    nbf: number;
    exp: number;
    sub: string;
    scope?: Array<string>;
}

function Base64Url(token: string): AuthClaims
{
    // Example decoder

    const payload = token.split('.')[1];
    if (!payload) throw new Error('Invalid token');

    const safePayload = payload.replace(/-/g, '+').replace(/_/g, '/');
    const paddedPayload = safePayload + '==='.slice(0, (4 - safePayload.length % 4) % 4);

    const raw = window.atob(paddedPayload);

    const utf8 = decodeURIComponent(
        raw.split('').map(function(c)
    {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(utf8) as AuthClaims;

}
