import { Injectable } from '@nestjs/common';``
import axios from 'axios';
import hubspot from '@hubspot/api-client';

@Injectable()
export class HubspotService {
  async authorize() {
    const refreshTokenFormData = {
      grant_type: 'refresh_token',
      client_id: process.env.HUBSPOT_CLIENT_ID,
      client_secret: process.env.HUBSPOT_CLIENT_SECRET,
      redirect_uri: process.env.HUBSPOT_REDIRECT_URI,
      refresh_token: process.env.HUBSPOT_REFRESH_TOKEN
    };

    try {
      const response =  await axios.post('https://api.hubapi.com/oauth/v1/token', refreshTokenFormData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
