import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

function NewRoutineButton() {
  return (
    <>
      <Button variant={"dynamis"} asChild>
        <Link href="/addRoutine">
          <Plus /> Nueva Rutina
        </Link>
      </Button>
    </>
  );
}

export default NewRoutineButton