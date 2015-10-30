---
layout: layout.hbs
---

# Hackathon - Business Locations

You are approached by a business developer to get advice on where to build a
new store in Phoenix, AZ. There are currently six candidates. Use the Yelp
dataset and come up with your own scoring scheme to identify the best location
to recommend.

## Report

[Read the Report](report.html)

## Business Types
As a team, choose one of the following business types to work on:

- A new full-service daycare center
- A new full-service car wash
- A new 24-hours gym
- A new 24-hours diner
- A new swimming pool
- A new organic food store
- A new sushi buffet

## Scoring Method

For this hackathon, you will use a scoring method that is based on a series of
20 Yes/No questions that can be applied to each candidate location. The candidate
location that has the most number of Yes's is the most viable location.

Each Yes/No question generally should take on the form of

  _Does the location have X nearby?_

where X is a feature that you think would be useful for the business to be viable.

Two examples of such questions are:
1. Does the location have _at least one McDonald's within one mile_?
1. Does the location have _at least ten businesses with 100 or more reviews within one mile_?

## Coding

Implement scoring functions and visualize how these candidate locations are
scored. The skeleton code is provided for you in [report.html](report.html).

## Grading

Each person must implement at least two questions to receive credits for this
hackathon.

## Submissions

### Business Type

Our team chose to analyze candidate locations for a new 24-hours diner
### Contributors

The team members who contributed to this hackathon are:

- Fadhil Suhendi
- Zach Lamb
- Kari Santos
- Deniz Kazakov
- Heather Witte

### 20 Questions

Our team came up with the following relevant questions:

1. Any other diners with 24 hours ?

  (one sentence justification why this question is important)

2. Is there any restaurants with 3 stars or less ? (fadhil suhendi)

  (one sentence justification why this question is important)

3. Are there any clubs within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

4. Are there any bars within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

5. Are there any music venue within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

6. Are there any movie theaters within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

7. Are there any three stars or less establishment within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

8. Are there any low price range (1) restaurants within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

9. Are there any thrift shops within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

10. Are there any college/universities within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

11. Any other dive bars and no wine bars within 2 km?

  (one sentence justification why this question is important)

12. Any other hospitals within 2 km ? (fadhil suhendi)

  (one sentence justification why this question is important)

13. Are there any hotels within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

14. Are there any retirement homes within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

15. Are there any trendy/upscale establishment within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

16. Are there any establishment that serve alcohol within 2 kilometers ? contributed by (Name)

  (one sentence justification why this question is important)

17. Is there any restaurants with 3 stars or less within 2 kilometers ? contributed by (Fadhil Suhendi)

  You don’t want highly-rated competition nearby.

18. Are there any dry/cleaning or laundry businesses within 2 kilometers ? contributed by (Fadhil Suhendi)

  When people do their laundry late at night, they may get hungry

19. Are there any religious organization within 2 kilometers ? contributed by (fadhil suhendi)

  There are many people who have late night prayer

20. Are there any libraries within 2 kilometers ? contributed by (fadhil suhendi)
  Some people might get hungry after studying

### Conclusion

Our team collectively has implemented (N) scoring functions. Based on
the scores, our team recommends location (1, 2, 3, 4, 5, or 6 from west to east),
because it receives (m) out of (N) possible scores.

Question|Site 1|Site 2|Site 3|Site 4|Site 5|Site 6
--------|------|------|------|------|------|------
Q1|yes|yes|no|no|no|no
Q2|no|no|no|yes|yes|yes
Q3|no|no|yes|yes|yes|yes
Q4|no|no|yes|yes|yes|yes
Q5|no|no|no|no|no|no
Q6|no|no|no|no|no|no
Q7|no|no|no|no|no|no
Q8|no|no|no|no|no|no
Q9|no|no|no|no|no|no
Q10|no|no|no|no|no|no
Q11|no|no|no|no|no|no
Q12|no|no|no|no|no|no
Q13|no|no|no|no|no|no
Q14|no|no|no|no|no|no
Q15|no|no|no|no|no|no
Q16|no|no|no|no|no|no
Q17|yes|yes|yes|no|no|no
Q18|yes|yes|yes|no|no|yes
Q19|yes|yes|yes|yes|no|yes
Q20|yes|yes|yes|yes|yes|yes
TOTALS|5|5|6|5|4|6
