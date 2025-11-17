"use client";

import {
  deleteLesson,
  editLesson,
  updateLesson,
  editModule,
  updateModule,
  setModules,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
import { RootState } from "../../../store";

import * as client from "../../client";

export default function Modules() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  // const { cid } = useParams();
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid || "";
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
  const handleAddLesson = async () => {
    if (!targetModuleId || !newLessonName.trim()) return;

    try {
      const newLesson = await client.createLessonForModule(targetModuleId, {
        name: newLessonName.trim(),
      });

      await fetchModules();

      setShowLessonModal(false);
      setNewLessonName("");
      setTargetModuleId(null);
    } catch (error) {
      console.error("Error adding lesson:", error);
      alert("Failed to add lesson. Check console for details.");
    }
  };

  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    //cannot use module as it is a reserved keyword
    const createdModule = await client.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, createdModule]));
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m
    );
    dispatch(setModules(newModules));
  };

  return (
    <div id="wd-modules">
      <Row>
        <Col className="margin-bottom-15">
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={onCreateModuleForCourse}
          />
        </Col>
      </Row>
      <Row>
        <Col className="margin-top-15">
          <ListGroup id="wd-modules" className="rounded-0">
            {modules.map((module: Module) => (
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
                          onUpdateModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}

                  {/* Module control buttons */}

                  {isFaculty && (
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => onRemoveModule(moduleId)}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
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
                            onEdit={async (mid, lid) => {
                              dispatch(
                                editLesson({ moduleId: mid, lessonId: lid })
                              );
                            }}
                            onDelete={async (mid, lid) => {
                              await client.deleteLesson(mid, lid);
                              dispatch(
                                deleteLesson({ moduleId: mid, lessonId: lid })
                              );
                            }}
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
