import React from "react";
import "./FaqBlockCss.css";
const FagBlock = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="faq__inner">
          <div class="faq__box">
            <h2 class="faq__box-title" style={{width: '200px', marginLeft: '100px'}}>
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="faq__list">
            <details class="faq__list-details">
              <summary class="faq__list-summary">
                How far is nearset bus station ?
              </summary>
              <p class="faq__list-answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam commodi cum enim eos eum id ipsum, nihil quia, quidem
                sequi totam vero! Adipisci cumque dolore dolores, eligendi modi
                soluta vel?
              </p>
            </details>
            <details class="faq__list-details">
              <summary class="faq__list-summary">
                Why this project is better than others ?
              </summary>
              <p class="faq__list-answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam commodi cum enim eos eum id ipsum, nihil quia, quidem
                sequi totam vero! Adipisci cumque dolore dolores, eligendi modi
                soluta vel?
              </p>
            </details>
            <details class="faq__list-details">
              <summary class="faq__list-summary">
                Estimated time of completion ?
              </summary>
              <p class="faq__list-answer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam commodi cum enim eos eum id ipsum, nihil quia, quidem
                sequi totam vero! Adipisci cumque dolore dolores, eligendi modi
                soluta vel?
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FagBlock;
