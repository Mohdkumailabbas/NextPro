"use client";

import { useMutation, useQuery } from "convex/react";

import { Button } from "@/components/ui/button";

import { api } from "../../convex/_generated/api";

const X = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProject({
        name: "New project123"
      })}>
        Add new
      </Button>

      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>Owner Id: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
};

export default X;


//
// useQuery  Used to fetch data
// useMutation Used to change data (create/update/delete)
// api Auto-generated functions from your backend.(API is a set of functions or endpoints that allow one system to request data or actions from another system. In this case, it allows the frontend to communicate with the backend.)