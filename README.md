[model_training_details.html](https://github.com/user-attachments/files/25507751/model_training_details.html)# Plant-Species-Image-Classification
A. Project Overview
The purpose of this study is to develop an image classification model capable of identifying 20 different species of ornamental and tropical plants. We collected over 5,000 plant photographs using Google Teachable Machine and trained a model to discriminate between species based on visual features such as bloom appearance, leaf shape, and color.

B. Plant Species Section 


c


[Uplo<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Model Training Details</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Lato', sans-serif;
      background: linear-gradient(135deg, #f5f0e8 0%, #e8f0e8 50%, #f0e8f5 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
    }

    .container {
      max-width: 720px;
      width: 100%;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .header .label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 0.4rem;
    }

    .header h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      color: #2c4a2e;
      margin-bottom: 0.5rem;
    }

    .divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #4a7c59, #8b4f8b);
      margin: 0.8rem auto 0;
      border-radius: 2px;
    }

    .table-wrapper {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead tr {
      background: linear-gradient(135deg, #2c4a2e, #3d6b40);
    }

    thead th {
      padding: 1.1rem 1.5rem;
      text-align: left;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.85);
    }

    thead th:last-child {
      text-align: right;
    }

    tbody tr {
      border-bottom: 1px solid #f0f0f0;
      transition: background 0.15s ease;
    }

    tbody tr:last-child {
      border-bottom: none;
    }

    tbody tr:hover {
      background: #f7fbf7;
    }

    tbody td {
      padding: 1.1rem 1.5rem;
      vertical-align: middle;
    }

    .param-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      font-size: 1.2rem;
      margin-right: 0.9rem;
      flex-shrink: 0;
    }

    .param-cell {
      display: flex;
      align-items: center;
    }

    .param-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: #2c3e2d;
      display: block;
      line-height: 1.2;
    }

    .param-sub {
      font-size: 0.75rem;
      color: #aaa;
      font-weight: 400;
      margin-top: 1px;
      display: block;
    }

    .value-cell {
      text-align: right;
    }

    .value-badge {
      display: inline-block;
      padding: 0.35rem 1rem;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: white;
    }

    .footer-note {
      text-align: center;
      margin-top: 1.2rem;
      font-size: 0.78rem;
      color: #aaa;
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p class="label">Section C</p>
      <h2>Model Training Details</h2>
      <div class="divider"></div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th style="text-align:right;">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="param-cell">
                <div class="param-icon" style="background:#e8f5e9;">🔄</div>
                <div>
                  <span class="param-name">Epochs</span>
                  <span class="param-sub">Total training iterations over the dataset</span>
                </div>
              </div>
            </td>
            <td class="value-cell">
              <span class="value-badge" style="background: linear-gradient(135deg,#4a7c59,#2e7d32);">100</span>
            </td>
          </tr>
          <tr>
            <td>
              <div class="param-cell">
                <div class="param-icon" style="background:#e8eaf6;">📦</div>
                <div>
                  <span class="param-name">Batch Size</span>
                  <span class="param-sub">Number of samples per gradient update</span>
                </div>
              </div>
            </td>
            <td class="value-cell">
              <span class="value-badge" style="background: linear-gradient(135deg,#5c6bc0,#3949ab);">16</span>
            </td>
          </tr>
          <tr>
            <td>
              <div class="param-cell">
                <div class="param-icon" style="background:#fff3e0;">📈</div>
                <div>
                  <span class="param-name">Learning Rate</span>
                  <span class="param-sub">Step size for optimizer weight updates</span>
                </div>
              </div>
            </td>
            <td class="value-cell">
              <span class="value-badge" style="background: linear-gradient(135deg,#e67e22,#d35400);">0.001</span>
            </td>
          </tr>
          <tr>
            <td>
              <div class="param-cell">
                <div class="param-icon" style="background:#fce4ec;">🖼️</div>
                <div>
                  <span class="param-name">Images per Class</span>
                  <span class="param-sub">Number of training images per plant species</span>
                </div>
              </div>
            </td>
            <td class="value-cell">
              <span class="value-badge" style="background: linear-gradient(135deg,#c0392b,#96281b);">250</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="footer-note">Training configuration used for plant species classification model</p>
  </div>
</body>
</html>
ading model_training_details.html…]()

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
