# Plant-Species-Image-Classification\

A. Project Overview
The purpose of this study is to develop an image classification model capable of identifying 20 different species of ornamental and tropical plants. We collected over 5,000 plant photographs using Google Teachable Machine and trained a model to discriminate between species based on visual features such as bloom appearance, leaf shape, and color.

B. Plant Species Section 
1.ELEUSINE INDICA
![1](https://github.com/user-attachments/assets/be1c3297-cd15-447f-8045-4248f26386f1)


c


1<img width="918" height="608" alt="Screenshot 2026-02-14 125121" src="https://github.com/user-attachments/assets/861edeb7-f550-48f2-9b46-0bebd5216220" />
2<img width="920" height="600" alt="Screenshot 2026-02-14 124245" src="https://github.com/user-attachments/assets/95b24594-8b00-453e-a1b4-f4731917f4de" />
3<img width="921" height="607" alt="Screenshot 2026-02-14 130027" src="https://github.com/user-attachments/assets/2e591369-139a-4e34-88b5-46b81190e442" />4
4<img width="930" height="609" alt="Screenshot 2026-02-14 130236" src="https://github.com/user-attachments/assets/ca6d0a02-3e59-4558-a381-18c637dcf5da" />
5<img width="913" height="606" alt="Screenshot 2026-02-14 131107" src="https://github.com/user-attachments/assets/ae87ad64-79b7-4f84-af33-1f7a7fdf860f" />
6<img width="921" height="613" alt="Screenshot 2026-02-14 131333" src="https://github.com/user-attachments/assets/a4b74633-dbe5-48cd-9aa0-feca091e8b9b" />
7<img width="911" height="597" alt="Screenshot 2026-02-14 131453" src="https://github.com/user-attachments/assets/3313b894-1ec8-4ae0-868f-987212181e31" />
8<img width="615" height="623" alt="Screenshot 2026-02-14 131956" src="https://github.com/user-attachments/assets/53aa4db5-5558-4493-a3dc-418fe6881675" />
9<img width="615" height="626" alt="Screenshot 2026-02-14 142527" src="https://github.com/user-attachments/assets/6bd2913e-c2e9-463b-8c49-f6a5bbf0bdd2" />
10<img width="813" height="614" alt="Screenshot 2026-02-14 140754" src="https://github.com/user-attachments/assets/222f0952-463c-4407-b171-47011357553d" />




Step 10:
1. How did the number of images per class affect your model’s accuracy?
   -The amount of photos per class significantly influenced the model's performance. I discovered that plant species with more photos were predicted more accurately since the model had more data to work with. When a class contained fewer photos, the model became confused and generated more errors. I also discovered that having a balanced number of photos per class allowed the model to perform more fairly. When one class had more photos than the others, the model favored that class during prediction.
2. Which plant species were most commonly misclassified and why?
   -The most typically mistaken species were those that appeared to be quite similar to one another. Many plants had nearly identical leaf color, shape, and feel, therefore the model had difficulties recognizing them. I also noted that lighting and background had an important influence. Some photographs were taken in varied lighting settings or with distracting backdrops, making it difficult for the model to focus on the leaf details.
   
3. How did changing the epochs, batch size, or learning rate affect the training results?
   -When I raised the number of epochs, the model improved initially because it had more time to learn from the data. However, I realized that too many epochs could result in overfitting, in which the model simply memorizes the training images rather than learning general patterns.
I found that smaller batch sizes made training slower but more stable. Larger batch sizes made it faster, but the results were not always consistent.
A reduced learning rate makes the training slower but more precise. If the learning rate was set too high, the training became unstable, and the accuracy shifted.

4. What challenges did you encounter during dataset collection and labeling?
   -One of the most difficult problems was gathering enough photos for each plant type. Some plants were more difficult to find, so the dataset got slightly skewed. Another problem was ensuring that the photographs were clear and correctly captioned. Even a single wrongly tagged image could have an impact on the model's performance. Lighting, shadows, and background distractions also reduced the effectiveness of several photographs as training tools.
   
5. If you were to improve your model, what specific changes would you make and why?
   -If I were to improve the model, I would collect additional photographs for each class to create a more balanced dataset. I'd also try to snap photographs in better lighting and with a plain background to eliminate noise. I would explore more thoroughly with training parameters such as epochs and learning rate to find the ideal combination. Finally, I would include additional diverse photos, such as different angles and sizes of leaves, to help the model generalize more effectively in real-world scenarios.
