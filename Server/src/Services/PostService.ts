import { PostType } from "../../../my-app/src/Features/HomePage/type";
import { IServerStorage } from "../IServerStorage";

class PostService implements IServerStorage<PostType[]> {
    data: PostType[];

    constructor() {
        this.data = [{
            "id": "1",
            "ownerName": "roei",
            "content": "this is my first post",
            "amountOfLikes": 5,
            "comments": [
                {
                    "author": "bar",
                    "content": "amazing!"
                },
                {
                    "author": "maor",
                    "content": "beautiful!"
                },
                {
                    "author": "romi",
                    "content": "wow!"
                }
            ],
            "date": "30.03.2025"
        },
        {
            "id": "2",
            "ownerName": "bar",
            "content": "this is a post from thailand",
            "amountOfLikes": 10,
            "comments": [
                {
                    "author": "nadav",
                    "content": "exiting!"
                },
                {
                    "author": "guy",
                    "content": "perfect!"
                },
                {
                    "author": "romi",
                    "content": "wow!"
                }
            ],
            "date": "12.06.2025"
        },
        {
            "id": "3",
            "ownerName": "maor",
            "content": "i love football",
            "amountOfLikes": 12,
            "comments": [
                {
                    "author": "keren",
                    "content": "king!"
                },
                {
                    "author": "avi",
                    "content": "enjoy!"
                },
                {
                    "author": "romi",
                    "content": "wow!"
                }
            ],
            "date": "25.06.2025"
        }];
    }



    find(findFunc: Function): PostType[] {
        return this.data.filter((object) => findFunc(object));
    }
}

export { PostService };