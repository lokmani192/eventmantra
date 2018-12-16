export class SocialLink {
  constructor(
    public className: string,
    public link: string,
    public text: string,
    public imageUrl?: string,
    public width: number =25
    ) { }
}
