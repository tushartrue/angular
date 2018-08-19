export interface  User{
    login:string;
    id:string;
    node_id:string;
    avatar_url:string;
    gravatar_id:string;
    url:string;
    html_url:string;

    followers_url:string;
    following_url:string;
    gists_url:string;
    starred_url:string;
    subscriptions_url:string;

    organizations_url:string;
    repos_url:string;
    events_url:string;
    received_events_url:string;
    type:string;
    site_admin:string;
}

export class Person{
  firstName:string;
  lastName:string;
  email:string;
  constructor(firstName:string,lastName:string,email:string){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
  }
}