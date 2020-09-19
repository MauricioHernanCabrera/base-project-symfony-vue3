<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Entity\Task;
use App\Form\TaskType;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class TaskController extends AbstractController
{

  /**
   * @Route("/", name="task_new")
   */
  public function new(Request $request)
  {
    $task = new Task();
    $form = $this->createForm(TaskType::class, $task);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
      $entityManager = $this->getDoctrine()->getManager();
      $entityManager->persist($task);
      $entityManager->flush();

      return $this->redirectToRoute('task_new');
      // ... do your form processing, like saving the Task and Tag entities
    }

    return $this->render('task/new.html.twig', [
      'form' => $form->createView(),
    ]);
  }
}
