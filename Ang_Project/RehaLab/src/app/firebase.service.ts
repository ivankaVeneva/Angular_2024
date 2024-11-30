import { Injectable } from '@angular/core';
import{ Database, ref, set, get, update, remove} from "@angular/fire/database";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) { }

  createPost(postId:string, content: string): Observable<void>{
    return from(set(ref(this.db, `post/` + postId), {title, content}));
  }
  getPosts(): Observable<any> {
    return from(get(ref(this.db, `posts`)));
  }
}
