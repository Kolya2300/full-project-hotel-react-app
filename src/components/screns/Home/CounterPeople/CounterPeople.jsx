import React from 'react';
import './CounterPeople.module.css'
import './js/counterPeopleAndTheirMoneyForHotel'
const CounterPeople = () => {
    return (
        <div>
            <div data-visible="accommodation,flights" className="xp__input-group xp__guests"
                 data-component="search/group/group-with-modal" data-sb-id="main" tabIndex="0" style={{display: 'none'}}
                 id="content">
                <div data-component="xp-index/guest-errors" data-sb-id="main" data-view-id="accommodation" role="alert">
                </div>

                <div id="xp__guests__inputs-container" className="xp__guests__inputs focussable " data-group-modal=""
                     style={{display: 'block'}} role="region" aria-label="Кількість номерів та гостей">
                    <button id="closeBtn">Закрыть</button>
                    <div data-component="search/group/group" data-sb-id="main" data-sb-width="medium"
                         data-sb-bbtool-searchbox="0" data-sb-group-children-hide="0"
                         data-sb-group-children-ages-hide="0" data-sb-group-infants-hide="1" data-sb-group-pets-hide="0"
                         data-sb-group-rooms-hide="0" data-sb-group-block-labels="0" data-sb-group-use_adults_label="0"
                         data-sb-group-always-expanded="0" data-sb-group-use-bui-stepper="1"
                         data-sb-group-bui-steppers-accessible="1" data-fe_sb_group_descriptive_dropdowns="0"
                         data-fe_sb_universal_design="0" data-fe_sb_xpi="1" data-fe_remove_duplicate_ids="0"
                         data-fe_sb_unique_id="" data-sb_reorder_rooms_block="1" data-sb-facelift="0"
                         data-fe_sb_show_children_age_bracket="1" data-fe_sb_mandatory_child_ages="1"
                         data-fe_sb_child_ages_ui_update="0" data-fe_sb_dont_use_default_child_age="1">
                        <div className="u-clearfix" data-render="">
                            <div className="sb-group__field sb-group__field-adults">
                                <div className="bui-stepper" data-bui-component="InputStepper">
                                    <div className="bui-stepper__title-wrapper">
                                        <label className="bui-stepper__title" htmlFor="group_adults">Дорослі</label>
                                    </div>
                                    <div className="bui-stepper__wrapper sb-group__stepper-a11y">
                                        <input style={{display: 'none'}} type="number" className="bui-stepper__input"
                                               data-bui-ref="input-stepper-field" id="group_adults" name="group_adults"
                                               min="1" max="30" value="1" data-group-adults-count="" />
                                            <button
                                                className="bui-button bui-button--secondary bui-stepper__subtract-button sb-group__stepper-button-disabled"
                                                data-bui-ref="input-stepper-subtract-button" type="button"
                                                aria-label="Дорослі: зменшити кількість"
                                                aria-describedby="group_adults_desc" data-action="minus">
                                                <span className="bui-button__text">−</span>
                                            </button>
                                            <span className="bui-stepper__display" data-bui-ref="input-stepper-value"
                                                  aria-hidden="true" data-counter>1</span>
                                            <button
                                                className="bui-button bui-button--secondary bui-stepper__add-button "
                                                data-bui-ref="input-stepper-add-button" type="button"
                                                aria-label="Дорослі: збільшити кількість"
                                                aria-describedby="group_adults_desc" data-action="plus">
                                                <span className="bui-button__text">+</span>
                                            </button>

                                            <div></div>
                                            <div className="sb-group__field sb-group__field-rooms">
                                                <div className="bui-stepper" data-bui-component="InputStepper">
                                                    <div className="bui-stepper__title-wrapper">
                                                        <label className="bui-stepper__title"
                                                               htmlFor="no_rooms">Номери</label>
                                                    </div>
                                                    <div className="bui-stepper__wrapper sb-group__stepper-a11y">
                                                        <input
                                                               style={{display: 'none'}}
                                                               className="bui-stepper__input"
                                                               data-bui-ref="input-stepper-field" id="no_rooms"
                                                               name="no_rooms" min="1"
                                                               max="30" value="1" data-group-rooms-count="" />
                                                            <button
                                                                className="bui-button bui-button--secondary bui-stepper__subtract-button sb-group__stepper-button-disabled"
                                                                data-bui-ref="input-stepper-subtract-button"
                                                                type="button"
                                                                aria-label="Номери: зменшити кількість"
                                                                aria-describedby="no_rooms_desc"
                                                                data-action="minus-room">
                                                                <span className="bui-button__text">−</span>
                                                            </button>
                                                            <span className="bui-stepper__display"
                                                                  data-bui-ref="input-stepper-value"
                                                                  aria-hidden="true" data-counter-room>1</span>
                                                            <button
                                                                className="bui-button bui-button--secondary bui-stepper__add-button "
                                                                data-bui-ref="input-stepper-add-button" type="button"
                                                                aria-label="Номери: збільшити кількість"
                                                                aria-describedby="no_rooms_desc"
                                                                data-action="plus-room">
                                                                <span className="bui-button__text">+</span>
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterPeople;
