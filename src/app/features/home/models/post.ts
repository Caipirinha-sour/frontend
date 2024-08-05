import { Citizen } from '../../../shared/models/citizen';
import { Tag } from '../../../shared/models/tag';

export interface Post {
  id: number;
  text: string;
  mediaUrl: string;
  totalRating: number;
  tag: Tag;
  citizen: Citizen;
}
