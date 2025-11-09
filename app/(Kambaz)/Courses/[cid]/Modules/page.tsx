"use client";

import {
  addLesson,
  deleteLesson,
  editLesson,
  updateLesson,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import LessonEditor from "./LessonEditor";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import type { Module, Lesson } from "../../../Database/userDefinedTypes";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../store";
import { current } from "@reduxjs/toolkit";
export default function Modules() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const { cid } = useParams();

  const dispatch = useDispatch();
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  const [showLessonModal, setShowLessonModal] = useState(false);
  const [newLessonName, setNewLessonName] = useState("");
  const [targetModuleId, setTargetModuleId] = useState<string | null>(null);

  const [moduleName, setModuleName] = useState("");
  const openLessonModal = (moduleId: string) => {
    setTargetModuleId(moduleId);
    setNewLessonName("");
    setShowLessonModal(true);
  };

  const handleAddLesson = () => {
    if (!targetModuleId || !newLessonName.trim()) return;
    dispatch(
      addLesson({ moduleId: targetModuleId, name: newLessonName.trim() })
    );
  };

  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div id="wd-modules">
      <Row>
        <Col className="margin-bottom-15">
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={() => {
              dispatch(addModule({ name: moduleName, course: cid }));
              setModuleName("");
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="margin-top-15">
          <ListGroup id="wd-modules" className="rounded-0">
            {modules
              .filter((module: Module) => module.course === cid)
              .map((module: Module) => (
                <ListGroupItem
                  key={module._id}
                  className="wd-module p-0 mb-5 fs-5 border-gray"
                >
                  {/* -------- Module Header -------- */}
                  <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />

                    {/* Inline module edit */}
                    {!module.editing && module.name}
                    {module.editing && (
                      <FormControl
                        className="w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(
                            updateModule({ ...module, name: e.target.value })
                          )
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(
                              updateModule({ ...module, editing: false })
                            );
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}

                    {/* Module control buttons */}

                    {isFaculty && (
                      <ModuleControlButtons
                        moduleId={module._id}
                        deleteModule={(moduleId) =>
                          dispatch(deleteModule(moduleId))
                        }
                        editModule={(moduleId) =>
                          dispatch(editModule(moduleId))
                        }
                      />
                    )}

                    {/* Add lesson button */}
                    {isFaculty && (
                      <Button
                        size="sm"
                        className="ms-3"
                        onClick={() => openLessonModal(module._id)}
                      >
                        + Lesson
                      </Button>
                    )}
                  </div>

                  {/* -------- Lessons List -------- */}
                  {module.lessons && (
                    <ListGroup className="wd-lessons rounded-0">
                      {module.lessons.map((lesson: Lesson) => (
                        <ListGroupItem
                          key={lesson._id}
                          className="wd-lesson p-3 ps-1"
                        >
                          <BsGripVertical className="me-2 fs-3" />

                          {/* Inline lesson edit */}
                          {!lesson.editing && lesson.name}
                          {lesson.editing && (
                            <FormControl
                              className="w-50 d-inline-block"
                              onChange={(e) =>
                                dispatch(
                                  updateLesson({
                                    moduleId: module._id,
                                    lesson: { ...lesson, name: e.target.value },
                                  })
                                )
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  dispatch(
                                    updateLesson({
                                      moduleId: module._id,
                                      lesson: { ...lesson, editing: false },
                                    })
                                  );
                                }
                              }}
                              defaultValue={lesson.name}
                            />
                          )}

                          {/* Lesson control buttons */}
                          {isFaculty && (
                            <LessonControlButtons
                              moduleId={module._id}
                              lessonId={lesson._id}
                              onEdit={(mid, lid) =>
                                dispatch(
                                  editLesson({ moduleId: mid, lessonId: lid })
                                )
                              }
                              onDelete={(mid, lid) =>
                                dispatch(
                                  deleteLesson({ moduleId: mid, lessonId: lid })
                                )
                              }
                            />
                          )}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  )}
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>
      </Row>
      <LessonEditor
        show={showLessonModal}
        handleClose={() => setShowLessonModal(false)}
        dialogTitle="Add Lesson"
        lessonName={newLessonName}
        setLessonName={setNewLessonName}
        onSave={handleAddLesson}
      />
    </div>
  );
}
