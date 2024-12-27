"use client";

import React, { useState } from "react";
import { Plus, X, Edit2, Save } from "lucide-react";
import { Button } from "../../component/ui/Button";
import { Card } from "../../component/card";
import { useRouter } from "next/router";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const colors = [
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-pink-100",
    "bg-purple-100",
  ];

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 6 - 3, // Random rotation between -3 and 3 degrees
      };
      setNotes([...notes, note]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEditing = (note) => {
    setEditingId(note.id);
    setEditingText(note.text);
  };

  const saveEdit = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: editingText } : note
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNote();
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <Card className="p-4 mb-8 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your note..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={addNote} className="flex items-center gap-2">
              <Plus size={16} /> Add Note
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`relative p-4 rounded-lg shadow-lg ${note.color} transform hover:scale-105 transition-transform`}
              style={{ transform: `rotate(${note.rotation}deg)` }}
            >
              {editingId === note.id ? (
                <div className="space-y-2">
                  <textarea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                    rows="3"
                  />
                  <Button
                    size="sm"
                    onClick={() => saveEdit(note.id)}
                    className="flex items-center gap-1"
                  >
                    <Save size={14} /> Save
                  </Button>
                </div>
              ) : (
                <>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => startEditing(note)}
                      className="p-1 hover:bg-white/20 rounded"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="p-1 hover:bg-white/20 rounded text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p className="whitespace-pre-wrap pt-4">{note.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        {/* <button
          onClick={() => router.push("/")}
          class="mt-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          Back to Home
        </button> */}
      </div>
    </div>
  );
};

export default StickyNotes;
