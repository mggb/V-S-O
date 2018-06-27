<?php

namespace App\Controller;

use App\Entity\Planete;
use App\Form\PlaneteType;
use App\Repository\PlaneteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/planete")
 */
class PlaneteController extends Controller
{
    /**
     * @Route("/", name="planete_index", methods="GET")
     */
    public function index(PlaneteRepository $planeteRepository): Response
    {
        return $this->render('planete/index.html.twig', ['planetes' => $planeteRepository->findAll()]);
    }

    /**
     * @Route("/new", name="planete_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $planete = new Planete();
        $form = $this->createForm(PlaneteType::class, $planete);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($planete);
            $em->flush();

            return $this->redirectToRoute('planete_index');
        }

        return $this->render('planete/new.html.twig', [
            'planete' => $planete,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="planete_show", methods="GET")
     */
    public function show(Planete $planete): Response
    {
        return $this->render('planete/show.html.twig', ['planete' => $planete]);
    }

    /**
     * @Route("/{id}/edit", name="planete_edit", methods="GET|POST")
     */
    public function edit(Request $request, Planete $planete): Response
    {
        $form = $this->createForm(PlaneteType::class, $planete);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('planete_edit', ['id' => $planete->getId()]);
        }

        return $this->render('planete/edit.html.twig', [
            'planete' => $planete,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="planete_delete", methods="DELETE")
     */
    public function delete(Request $request, Planete $planete): Response
    {
        if ($this->isCsrfTokenValid('delete'.$planete->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($planete);
            $em->flush();
        }

        return $this->redirectToRoute('planete_index');
    }
}
