export interface ImageUploadResponse {
    data: {
        thumb: {
            url: string;
        },
        image: {
            url: string;
        }
    };
}